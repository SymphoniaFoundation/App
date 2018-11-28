interface IssuePayload {
  title: string;
  content: string; // markdown
  assign: string[];
  tags: string[];
}

export interface Issue {
  protocol: string;
  utc_timestamp: number;
  type: string;
  previous_event_pointer: string;
  payload: IssuePayload;
}
