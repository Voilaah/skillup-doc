# Courses list

SkillUp can import all or part of your courses directly from your platform.

## API requirements

Your platform needs to provide the following API to retrieve your courses list.


GET `https://your-external-platform.com/api/v1/courses`

The API needs to respond to the following specifications:

```json
{
    "total": 6,
    "per_page": "10",
    "current_page": 2,
    "last_page": 2,
    "next_page_url": "https://your-external-platform.com/api/v1/courses?page=3",
    "prev_page_url": "https://your-external-platform.com/api/v1/courses?page=1",
    "from": 1,
    "to": 10,
    "data" : [
        {
            "code": "001",
            "title": "A course title",
            "thumbnail": "https://your-external-platform.com/storage/app/medias/courses/thumbnail/181120100340-hairdresser-3572053_1280.jpg",
            "introduction": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
            "description": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.

            Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat",
            "objectives": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
            "outcomes": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
            "skills": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
            "inclusion": "Dolor commodo aliquip veniam labore amet elit. Laboris culpa quis id consequat voluptate officia tempor consectetur aliquip duis laborum occaecat.",
            "url": "https://your-external-platform.com/courses/123456",
            "meta" : {
                "duration": 150,
                "organization": "Organization name",
                "level": "beginner",
                "category": "category 1",
                "is_coming_soon": false,
                "is_published": true,
                "has_certificate": true,
                "is_free": true,
                "price": null,
                "locale": "en"
            }
        },
    ]
}
```

