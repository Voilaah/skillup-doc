# Course Model

<Badge type="warning">Page is Work in Progress</Badge>

::: info IMPORTANT DEFINITION

- A SkillUp course has many *modules*.
    - A *module* has many *lessons*.
        - A *lesson* has one:
            - engagement
            - or assignment
            - or summary
:::

**SkillUp course fields**

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
