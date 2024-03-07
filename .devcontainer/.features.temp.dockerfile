FROM devcontainer-app:latest
COPY --from=jb-devcontainer-features-b012339c32277dde5c444b25b9e1ad3f /tmp/jb-devcontainer-features /tmp/jb-devcontainer-features/
ENV NVM_DIR="/usr/local/share/nvm"
ENV NVM_SYMLINK_CURRENT="true"
ENV PATH="/usr/local/share/nvm/current/bin:/usr/local/share/npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
ENV NODE_VERSION="20.11.1"
ENV YARN_VERSION="1.22.19"

RUN chmod -R 0755 /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-aws-cli-1 \
&& cd /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-aws-cli-1 \
&& chmod +x ./devcontainer-feature-setup.sh \
&& ./devcontainer-feature-setup.sh
ENV NVM_DIR="/usr/local/share/nvm"
ENV NVM_SYMLINK_CURRENT="true"
ENV PATH="/usr/local/share/nvm/current/bin:${PATH}"
RUN chmod -R 0755 /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-node-1 \
&& cd /tmp/jb-devcontainer-features/ghcr.io-devcontainers-features-node-1 \
&& chmod +x ./devcontainer-feature-setup.sh \
&& ./devcontainer-feature-setup.sh
RUN chmod -R 0755 /tmp/jb-devcontainer-features/ghcr.io-devcontainers-contrib-features-pnpm-2 \
&& cd /tmp/jb-devcontainer-features/ghcr.io-devcontainers-contrib-features-pnpm-2 \
&& chmod +x ./devcontainer-feature-setup.sh \
&& ./devcontainer-feature-setup.sh