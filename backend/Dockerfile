FROM keymetrics/pm2:latest-slim

# Set workdir
WORKDIR /opt/owlspot

# Copy source file
COPY . ./

# Install all dependencies
RUN npm install

# Set default NODE_ENV to production
# Can be override by -e NODE_ENV on start
ENV NODE_ENV dev

# Expose the listening ports of the services
EXPOSE 4000

CMD [ "pm2-runtime", "ecosystem.config.js", "--web", "9615" ]
