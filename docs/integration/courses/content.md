<script setup>
import BadgeStd from '../../.vitepress/components/BadgeStd.vue'
</script>

# Course content

<BadgeStd label="Page is Work in Progress" color="danger" />

SkillUp can import a course content directly from your platform.

::: info IMPORTANT
Only the course medias (such as images, videos, audios, files upload) won't be imported.
:::



## API requirements

Your platform needs to provide the following API to retrieve your course content.

GET `https://your-external-platform.com/api/v1/courses/{id}`

**Query parameters**
| Field | Type | Default | Description |
|---|---|---|---|
| id | number | required | Course Id to retrieve from your platform |

```jsonc
{
    "id": 1,
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
    },
    "lessons": [
        {
            "title": "Lesson 1 title",
            "description":"Nostrud irure ullamco adipisicing qui dolor commodo. Anim exercitation velit tempor reprehenderit dolore.",
            "sections":[
                {
                    "title": "Section 1.1 title",
                    "type": "engagement",
                    "engagement": {
                        "type": "richcontent",
                        "content": "Excepteur <strong>enim</strong> commodo minim enim ex reprehenderit et eiusmod aliqua occaecat aliquip voluptate aliqua nisi. Dolore adipisicing in in anim ex incididunt velit adipisicing. Mollit pariatur veniam anim aliquip ipsum aute ut adipisicing duis incididunt anim dolor. Ullamco veniam esse <a href="">eiusmod</a> id consectetur qui id consequat mollit ex ut. Et culpa Lorem eu ex dolore labore laborum id eiusmod anim in."
                    }
                },
                {
                    "title": "Section 1.2 title",
                    "type": "engagement",
                    "engagement": {
                        "type": "video",
                        "content": "https://your-external-platform.com/storage/app/medias/courses/1234/video1.mp4"
                    }
                },
                {
                    "title": "Section 1.3 title",
                    "type": "engagement",
                    "engagement": {
                        "type": "audio",
                        "content": "https://your-external-platform.com/storage/app/medias/courses/1234/audio1.mp3"
                    }
                },
                {
                    "title": "Section 1.3 title",
                    "type": "engagement",
                    "engagement": {
                        "type": "embedded",
                        "content": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OKX6keqZ3y8?si=bmVv3PrjqikwsCa3\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
                    }
                },
                {
                    "title": "Section 2 title",
                    "type": "assignment",
                    "assignment": {
                        "type": "quiz",
                        "questions": [
                            {
                                "type": "truefalse",
                                "title": "White is the opposite of Black?",
                                "answer": true,
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "openanswer",
                                "title": "What do you think?",
                                "answer": null,
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "openanswer",
                                "title": "What do you think?",
                                "answer": "minimum",
                                "media": "https://your-external-platform.com/storage/app/medias/image1.jpg"
                            },
                            {
                                "type": "multiplechoice",
                                "title": "What is the correct answer?",
                                "choices": [
                                    {
                                        "choice": "A) A possible answer"
                                    },
                                    {
                                        "choice": "B) Another possible answer"
                                    },
                                    {
                                        "choice": "C) The correct answer"
                                    },
                                ],
                                "answer": 2,
                                "media": null
                            },
                        ]
                    }
                },
            ]
        }
    ]
}
```
