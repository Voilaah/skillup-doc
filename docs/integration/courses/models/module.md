# Module Model

<Badge type="warning">Page is Work in Progress</Badge>

::: info IMPORTANT DEFINITION

- A SkillUp course has many *modules*.
    - A *module* has many *lessons*.
        - A *lesson* has one:
            - engagement
            - or assignment
            - or summary
:::


**Module fields**

| Field       | Type   | Default  | Description                              |
| ----------- | ------ | -------- | ---------------------------------------- |
| id          | number | required | Module Id to retrieve from your platform |
| title       | string | required | Module title                             |
| description | text   | required | Module description                       |
