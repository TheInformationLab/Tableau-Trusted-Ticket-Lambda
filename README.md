# Tableau Trusted Ticket Proxy Implementation for Serverless Functions

Lambda Proxy implementation of Trusted Tickets in Tableau.
Original author [Craig Bloodworth](https://github.com/TheInformationLab/TableauTrustedTicketProxy)

## Description

Node JS Serverless Proxy for Tableau Server Trusted Ticket authentication allowing application servers with dynamic IP addresses to use Trusted Ticket authentication

## Install

1. Using the [Serverless Framework](https://serverless.com/) with AWS - but you should be able to implement it with any Cloud Provider
2. Clone repo `git clone https://github.com/TheInformationLab/Tableau-Trusted-Ticket-Lambda`
3. Rename serverless_dev.yml to serverless.yml (so remove the \_dev), populate it with your org ID and app name

## Configure Tableau Server

Tableau Server needs to trust the proxy server in order to exchange usernames for tickets. For Windows follow [these instructions](https://onlinehelp.tableau.com/current/server/en-us/trusted_auth_trustIP.htm) and on Linux you'll want Step 1 from [this page](http://onlinehelp.tableau.com/current/server-linux/en-us/trusted_auth_config_linux.htm)
