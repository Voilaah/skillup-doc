---
outline: [1, 5]
---

# SkillUp Course structure

<Badge type="warning">Page is Work in Progress</Badge>

::: info IMPORTANT DEFINITION

- A SkillUp course has many *modules*.
    - A *module* has many *lessons*.
        - A *lesson* has one:
            - engagement
            - or assignment
            - or summary
:::

## SkillUp Course Data Model

SkillUp course required fields

| Field           | Type    | Default  | Description                              |
| --------------- | ------- | -------- | ---------------------------------------- |
| id              | number  | required | Course Id to retrieve from your platform |
| title           | string  | required | Course title                             |
| thumbnail       | string  | required | Course thumbnail                         |
| introduction    | text    | required | Course introduction                      |
| outcomes        | text    | required | Course outcomes                          |
| objectives      | text    | required | Course objectives                        |
| skills          | text    | required | Course skills                            |
| inclusion       | text    | required | Course inclusion                         |
| url             | string  | required | The course url on your platform          |
| duration        | ?number | optional | Course duration in minutes               |
| organization    | string  | required | Organization                             |
| level           | enum    | required | beginner\|intermediate\|advanced         |
| category        | string  | required | Course Category                          |
| is_coming_soon  | boolean | required | Course is upcoming?                      |
| is_published    | boolean | true     | Course is published?                     |
| has_certificate  | boolean | true     | Course has a certificate?                 |
| is_free         | boolean | true     | Course                                   |
| price           | ?number | optional | Course price if not free                 |
| locale          | string  | required | Course language `en` or `th`             |



### Module

**Module fields**

| Field       | Type   | Default  | Description                              |
| ----------- | ------ | -------- | ---------------------------------------- |
| id          | number | required | Module Id to retrieve from your platform |
| title       | string | required | Module title                             |
| description | text   | required | Module description                       |


### Lesson

**Lesson fields**

| Field    | Type       | Default  | Description                               |
| -------- | ---------- | -------- | ----------------------------------------- |
| id       | number     | required | Lesson Id to retrieve from your platform |
| title    | string     | required | Lesson title                             |
| duration | number     | required | Lesson duration in minutes               |
| type     | enum       | required | engagement\|assignment\|summary           |
| files    | attachment | optional | Lesson files attachment                  |

**A lesson has one and only one**

- engagement
- or assignment
- or summary

### Engagement

- a rich text content
- a video
- an audio
- an embedded code

### Assignment

A assignment is a quiz that has many questions.

A quiz can be **graded** or **not**.

**Quiz fields**

| Field         | Type    | Default  | Description                                  |
| ------------- | ------- | -------- | -------------------------------------------- |
| id            | number  | required | Quiz Id to retrieve from your platform       |
| title         | string  | required | Quiz title                                   |
| graded        | boolean | true     | Quiz is graded?                              |
| weight        | number  | 1        | Quiz weight in the final grading calculation |
| passing_score | number  | 50       | Percentage to pass the quiz                  |
| questions     | array   | required | Quiz questions                               |

**Question**

**Question fields**

| Field   | Type    | Default  | Description                                       |
| ------- | ------- | -------- | ------------------------------------------------- |
| id      | number  | required | Question Id to retrieve from your platform        |
| title   | string  | required | Question title                                    |
| image   | ?string | optional | Question image displayed below the question title |
| type    | enum    | required | openanswer\|truefalse\|multiplechoices\|dragndrop |
| choices | ?array  | optional | An array of possible choices                      |
| answer  | ?string | optional | The correct answer                                |

A question has a title and an media image optionnaly.

SkillUp handles different types of questions:

- open answer
- true / false
- multiple choices

<br/>

### Summary


## Example




::: details Complete Example

For a course named "Basic Graphic Design with Canva"

- [**Course**] Basic Graphic Design with Canva
  - [**Lesson**] Foundations of Design
    - [**Section**] Foundations of Design Video
      - [**Engagement**] a video
    - [**Section**] Foundations of Design Quiz
      - [**Assignment**] a ungraded quiz
        - [*OpenAnswer*]: Write a summary of your understanding of the video
        - [*MultipleChoice*]: What is the main function of negative space in design?
          - [*Choices*]
            - A) To add more elements to a composition
            - B) To provide structure and breathing room for content
            - C) To make the design more complex
          - [*Answer*]
            - 2
    - [**Section**] Section summary
      - [**Engagement**] a summary
    - [**Section**] Additional Resources
      - [**Engagement**] a rich text content
      - [*Files*]
        - File 1 url
        - File 2 url
  - [**Lesson**] Advanced Design Principles
    - [**Section**] Advanced Design Principles Video
      - [**Engagement**] an embedded code
    - [**Section**] Advanced Design Principles Quiz (graded)
      - [**Assignment**] a graded quiz
        - [*OpenAnswer*]: Write a summary of your understanding of the video
        - [*TrueFalse*]: The function of negative space in design is to make design more complex ?
          - [*Answer*] true
    - [**Section**] Section summary
      - [**Engagement**] a summary
    - [**Section**] Additional Resources
      - [**Engagement**] a rich text content
      - [*Files*]
        - File 1 url
        - File 2 url

:::
