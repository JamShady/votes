export type Vote = string
export type Votes = Vote[]

export type Voter = {
    name: string,
    color: string,
    votes: Votes,
}

export type Voters = Voter[]

export type Scorer = (voter: Voter, vote: Vote) => number