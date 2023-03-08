import { gql } from "@apollo/client"

export const GET_HOMEPAGE_CAMPAIGNS = gql`
  query getHomepageCampaigns{
    campaignAddeds(first: 6, orderBy: createdAt, orderDirection: desc) {
      id
      campaignAddress
      creator
    }
  }
`

export const GET_USERNAME = gql`
  query getUserName($userAddress: String!){
    userAdded(id: $userAddress){
      username
      address
    }
  }
`

export const GET_CAMPAIGN_DETAILS = gql`
  query getCampaignDetails($campaignAddress: String!){
    campaignAdded(id: $campaignAddress){
      campaignAddress
      creator
      funders
      funderCount
    }
  }
`


