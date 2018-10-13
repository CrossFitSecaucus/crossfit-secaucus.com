# gcloud auth login
# gcloud config set project cs-site-209414
# gcloud functions
# gcloud beta functions deploy contactUsEmail --trigger-http --source ./functions/contactUsEmail --env-vars-file env.yml
# gcloud beta functions deploy trialClassEmail --trigger-http --source ./functions/trialClassEmail --env-vars-file env.yml

# Deployemnt
`firebase deploy --only functions:contactUs`

# Development
`firebase serve --only functions`


# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
