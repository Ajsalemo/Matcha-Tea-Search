# Build environment
FROM node:12.19.0-alpine as build
# Set the Gatsby environment variables
ENV GATSBY_APOLLO_CLIENT_URI=https://cors.bridged.cc/https://api.yelp.com/v3/graphql
ENV GATSBY_GOOGLE_MAPS_API_KEY=<INSERT_GOOGLE_MAPS_API_KEY>
ENV GATSBY_YELP_API_KEY=<INSERT_YELP_API_KEY>
# Need to install 'autoconf' to resolve a missing dependency 'autoreconf' due to the 'mozjpeg' package needing it
RUN apk add libpng-dev \
    && apk add autoconf \
    && apk add automake \
    && apk add make \
    && apk add g++ \
    && apk add libtool \
    && apk add nasm
# Change to the application working directory
WORKDIR /app
COPY . ./
RUN yarn install --frozen-lockfile --silent && \
    yarn global add react-scripts@4.0.0 && \
    yarn build

# Production environment
FROM nginx:stable-alpine
# Copy built files from the first stage
COPY --from=build /app/public /usr/share/nginx/html
# Overwriting the containers NGINX conf with our NGINX conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./init_container.sh /opt
COPY sshd_config /etc/ssh/
# ----------------------------------------------------------------- #
# Use this to add SSH 
# Start and enable SSH
# Set the working directory to /etc/ssh and generate SSH keys 
WORKDIR /etc/ssh/
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /opt/init_container.sh \
     && ssh-keygen -A
# ----------------------------------------------------------------- #
# Expose needed ports
EXPOSE 8080 2222

ENTRYPOINT [ "/opt/init_container.sh" ] 