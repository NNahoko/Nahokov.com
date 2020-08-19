import { gql } from "@apollo/client";

////////// BOOKINFO //////////
// ALLBOOKINFO //
export const BOOKINFO = gql`
  {
    bookinfos {
      id
      title
      author
      publisher
    }
  }
`;
// CREATE NEW BOOKINFO //
export const CREATE_BOOKINFO = gql`
  mutation CreateBookinfo(
    $title: String!
    $author: String!
    $publisher: String!
  ) {
    createBookinfo(
      input: { title: $title, author: $author, publisher: $publisher }
    ) {
      bookinfo {
        id
        title
        author
        publisher
      }
    }
  }
`;

// EDIT BOOKINFO //
export const EDIT_BOOKINFO = gql`
  mutation UpdateBookinfo(
    $id: ID!
    $title: String!
    $author: String!
    $publisher: String!
  ) {
    updateBookinfo(
      input: { id: $id, title: $title, author: $author, publisher: $publisher }
    ) {
      bookinfo {
        id
        title
        author
        publisher
      }
    }
  }
`;
// DELETE BOOKINFO //
export const DELETE_BOOKINFO = gql`
  mutation DeleteBookinfo($id: ID!) {
    deleteBookinfo(input: { id: $id }) {
      bookinfo {
        id
        title
        author
        publisher
      }
    }
  }
`;

////////// TASK //////////
// ALL TASKS //
export const TASK = gql`
  {
    tasks {
      id
      task
      limit
    }
  }
`;

// PART TASK //
export const PART_TASK = gql`
  {
    task(id: 14) {
      id
      completed
    }
  }
`;

// CREATE NEW TASK //
export const CREATE_TASK = gql`
  mutation CreateTask($task: String!, $limit: ISO8601Date) {
    createTask(input: { task: $task, limit: $limit }) {
      task {
        id
        task
        limit
      }
    }
  }
`;

// EDIT TASK //
export const EDIT_TASK = gql`
  mutation UpdateTask($id: ID!, $task: String!, $limit: ISO8601Date) {
    updateBookinfo(input: { id: $id, task: $task, limit: $limit }) {
      task {
        id
        task
        limit
      }
    }
  }
`;

// EDIT TASK_COMPLETED //
export const EDIT_TASK_COMPLETED = gql`
  mutation UpdateTaskCompleted($id: ID!, $completed: Boolean) {
    updateTaskCompleted(input: { id: $id, completed: $completed }) {
      task {
        id
        completed
      }
    }
  }
`;

// DELETE TASK //
export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      task {
        id
        task
        limit
      }
    }
  }
`;

/*
////////// TASK //////////
// ALL TASKS //
export const TASK = gql`
  {
    tasks {
      id
      task
      limit
      completed
    }
  }
`;

// PART TASK //
export const PART_TASK = gql`
  {
    task(id: 14) {
      id
      completed
    }
  }
`;

// CREATE NEW TASK //
export const CREATE_TASK = gql`
  mutation CreateTask(
    $task: String!
    $limit: ISO8601Date
    $completed: Boolean
  ) {
    createTask(input: { task: $task, limit: $limit, completed: $completed }) {
      task {
        id
        task
        limit
        completed
      }
    }
  }
`;

// EDIT TASK //
export const EDIT_TASK = gql`
  mutation UpdateTask($id: ID!, $task: String!, $limit: ISO8601Date) {
    updateBookinfo(input: { id: $id, task: $task, limit: $limit }) {
      task {
        id
        task
        limit
      }
    }
  }
`;

// EDIT TASK_COMPLETED //
export const EDIT_TASK_COMPLETED = gql`
  mutation UpdateTaskCompleted($id: ID!, $completed: Boolean) {
    updateTaskCompleted(input: { id: $id, completed: $completed }) {
      task {
        id
        completed
      }
    }
  }
`;

// DELETE TASK //
export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { id: $id }) {
      task {
        id
        task
        limit
      }
    }
  }
`;
*/
