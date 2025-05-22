# Lesson Model

<Badge type="warning">Page is Work in Progress</Badge>

::: info IMPORTANT DEFINITION

- A SkillUp course has many *modules*.
    - A *module* has many *lessons*.
        - A *lesson* has one:
            - engagement
            - or assignment
            - or summary
:::


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
