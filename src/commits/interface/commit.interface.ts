import { ApiProperty } from '@nestjs/swagger';

export class CommitInterface {
  @ApiProperty({ example: 'Sha' })
  sha: string;

  @ApiProperty({ example: 'Node id' })
  node_id: string;

  @ApiProperty({
    example: {
      author: {
        name: 'Author name',
        email: 'Author email',
        date: 'Date',
      },
      committer: {
        name: 'Committer name',
        email: 'Committer email',
        date: 'date',
      },
      message: 'Commit message',
      tree: {
        sha: 'Tree sha',
        url: 'Tree url',
      },
      url: 'Commit url',
      comment_count: 'Comment count',
      verification: {
        verified: 'Verification status',
        reason: 'Verification reason',
        signature: 'Verification signature',
        payload: 'Verification payload',
      },
    },
  })
  commit: Commit;

  @ApiProperty({ example: 'Commit url' })
  url: string;

  @ApiProperty({ example: 'Html url' })
  html_url: string;

  @ApiProperty({ example: 'Comments url' })
  comments_url: string;

  @ApiProperty({
    example: [
      {
        sha: 'Parent sha',
        url: 'Parent url',
        html_url: 'Parent html url',
      },
    ],
  })
  parents: Parent[];
}

export interface Commit {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface Author {
  name: string;
  email: string;
  date: string;
}

export interface Committer {
  name: string;
  email: string;
  date: string;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: any;
  payload: any;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}
