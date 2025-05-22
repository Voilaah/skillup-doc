# Assignment

<Badge type="warning">Page is Work in Progress</Badge>

::: info IMPORTANT DEFINITION

- A SkillUp course has many *modules*.
    - A *module* has many *lessons*.
        - A *lesson* has one:
            - engagement
            - or assignment
            - or summary
:::

**An assignment is a quiz that has many questions.**

It is important to note that an assignment can be **graded** or **not**.

## Quiz Model

**Quiz fields**

| Field         | Type    | Default  | Description                                  |
| ------------- | ------- | -------- | -------------------------------------------- |
| id            | number  | required | Quiz Id to retrieve from your platform       |
| title         | string  | required | Quiz title                                   |
| graded        | boolean | true     | Quiz is graded?                              |
| weight        | number  | 1        | Quiz weight in the final grading calculation  |
| passing_score | number  | 50       | Percentage to pass the quiz                  |
| questions     | array   | required | Quiz questions                               |

## Question Model

**Question fields**

| Field   | Type    | Default  | Description                                       |
| ------- | ------- | -------- | ------------------------------------------------- |
| id      | number  | required | Question Id to retrieve from your platform        |
| title   | string  | required | Question title                                    |
| image   | ?string | optional | Question image displayed below the question title |
| type    | enum    | required | openanswer\|truefalse\|multiplechoices\|dragndrop |
| choices | ?array  | optional | An array of possible choices                      |
| answer  | ?string | optional | The correct answer                                |


SkillUp handles different types of questions which derives different behaviors on the UI:

- open answer
- true / false
- multiple choices
- sort
- dragndrop
