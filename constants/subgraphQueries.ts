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

export const GET_USER_DETAILS = gql`
  query getUserDetails($userAddress: String!){
    userAdded(id:$userAddress){
      id
      address
      email
      twitter
      backedCount
      backed
      bio
      username
      created
      createdCount
      createdAt
      location
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

export const GET_ALL_CAMPAIGNS = gql`
  query getAllCampaigns($offset: Int!){
    campaignAddeds(first: 12, skip: $offset, orderBy: createdAt, orderDirection: desc) {
      id
      campaignAddress
      creator
    }
  }
`

export const GET_SOME_CAMPAIGNS = gql`
  query getSomeCampaigns($category: String!, $offset: Int!){
    campaignAddeds(first: 12, skip: $offset, where:{category: $category}, orderBy: createdAt, orderDirection: desc) {
      id
      campaignAddress
      creator
    }   
  }
`



