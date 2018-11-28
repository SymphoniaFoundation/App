import { Component, OnInit } from '@angular/core';

export interface KanbanBoard {
  title: string;
  color: string;
  items: Card[];
}

export interface Card {
  number: number;
  title: string;
  author: User;
  subject: string;
  labels: Label[];
  assigned: User[];
}

interface Label {
  title: string;
  color: string;
}

interface User {
  name: string;
  profile: string;
}

@Component({
  selector: 'sym-kanban-container',
  templateUrl: './kanban-container.component.html',
  styleUrls: ['./kanban-container.component.scss']
})
export class KanbanContainerComponent implements OnInit {

  public issue: KanbanBoard = {
    title: 'issue',
    color: 'violet',
    items: [
      {
        number: 1,
        title: 'Symphonia Improvement Proposal define procedure',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
          {
            title: '🎉Open',
            color: 'red',
          } as Label,
          {
            title: '🔒Close',
            color: 'red',
          } as Label,
          {
            title: '🐛Bug',
            color: 'red',
          } as Label,
          {
            title: '🌊Design',
            color: 'gray'
          } as Label,
          {
            title: '🔖Planning',
            color: 'gray'
          } as Label,
          {
            title: '💻Development',
            color: 'gray'
          } as Label,
          {
            title: '⚜️SIP',
            color: 'gray'
          } as Label
        ],
        assigned: [{
            name: 'yoonsung',
            // tslint:disable-next-line:max-line-length
            profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
          } as User, {
            name: 'yoonsung',
            // tslint:disable-next-line:max-line-length
            profile: 'https://avatars3.githubusercontent.com/u/693461?s=460&v=4'
          } as User
        ]
      },
      {
        number: 2,
        title: 'Proof of Stake on Plasma',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      },
      {
        number: 3,
        title: 'Issue the Token Contract',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🚀Deployment',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      },
      {
        number: 4,
        title: 'Prepare Token Swapping on Uniswap',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🦄Uniswap',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      }
    ] as Card[]
  };

  public InProgress: KanbanBoard = {
    title: 'In Progress',
    color: 'indigo',
    items: [
      {
        number: 0,
        title: 'Development Symphonia',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
          {
            title: '💻Development',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      }
    ] as Card[]
  };

  public NeedsReview: KanbanBoard = {
    title: 'Needs Review',
    color: 'pink',
    items: [
      {
        number: 0,
        title: 'Sample Issue',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
          {
            title: '💻Development',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      }
    ] as Card[]
  };

  public ReviewerApproved: KanbanBoard = {
    title: 'Reviewer Approved',
    color: 'grape',
    items: [
      {
        number: 0,
        title: 'Sample Issue',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
          {
            title: '💻Development',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      }
    ] as Card[]
  };

  public Done: KanbanBoard = {
    title: 'Done',
    color: 'green',
    items: [
      {
        number: 0,
        title: 'Sample Issue',
        author: {
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User,
        subject: '',
        labels: [
          {
            title: '🔮Research',
            color: 'gray'
          } as Label,
          {
            title: '💻Development',
            color: 'gray'
          } as Label,
        ],
        assigned: [{
          name: 'yoonsung',
          // tslint:disable-next-line:max-line-length
          profile: 'https://scontent-icn1-1.cdninstagram.com/vp/94bf873ab90b22cf203d61bc48a6a181/5CAEBB98/t51.2885-19/s320x320/26284516_1210865275714079_8304641861809602560_n.jpg'
        } as User]
      }
    ] as Card[]
  };

  constructor() { }

  ngOnInit() {
  }

}
