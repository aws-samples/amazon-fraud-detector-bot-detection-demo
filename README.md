# Detecting fake account registrations via bots using Amazon Fraud Detector

Examples, notebooks, and resources on how to use Amazon Fraud Detector (AFD) to detect fake account registrations via bots.

## Demo website

The quickest way to demonstrate how AFD can be used to detect bots is by using the demo website that has been created for this purpose. This website shows a registration form that can be filled in and submitted. The website tracks how long it takes the user to fill in the website and submits that information, together with the IP address and the email address to an AFD model, see architecture below:

![Architectural diagram](static/images/architecture.JPG?raw=true)

The (simplified) idea is that bots submit the registration form in an automated fashion and therefore much quicker and that bots choose random user names for the sign-up. The AFD model in this demo has been trained to pick up on those features that identify bots and return a risk score and an outcome (registration approved or denied).

When a regular user signs up on the demo website they will usually get their registration approved:

![Registration approved](static/images/registration_approved.JPG?raw=true)

The box in the lower left corner summarizes the data that has been submitted and also the AFD results that have been returned (the registration time is measured in milliseconds).

To get the sign-up denied one needs to be quite quick in filling in the form and submitting it. One trick that helps is using a random email address and copying it into the clipboard and then filling in the form quick:

![Registration denied](static/images/registration_denied.JPG?raw=true)

This repo also contains a [bot program](src/python/bot.py) that can be used to demonstrate how AFD works for this setup. We have found that customers like seeing the bot in action as it gives them a more concrete idea of what a bot attack looks like. This demo runs on Firefox with Geckodriver 0.27.0 -- you can find the latest version of [Geckodriver](https://github.com/mozilla/geckodriver/releases). You can also easily amend the script to run on Chrome, in this case you would need [Chromedriver](https://chromedriver.chromium.org/downloads)


## POC in a box

If your customer is interested in not only a demo but also in how to set up, train, and serve an AFD model, we have developed a [POC in a box](poc_deployment.md) that deploys all the required resources via a CloudFormation template.