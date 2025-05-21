<script setup>
import BadgeStd from '../../.vitepress/components/BadgeStd.vue'
</script>

# Webhook

<BadgeStd label="Page is Work in Progress" color="danger" />

## Course content webhook

Webhooks are event-driven communication between two platforms through an API.

Webhooks are useful when you want to connect to the SkillUp platform from your platform.

Triggered by specific events on your platform (ex: course creation, course update, course deletion, lesson creation, lesson update, lesson deletion...), webhooks automate communication between APIs and can be used to update SkillUp platform.


## Course creation

POST `https://skillup.global/api/v1/courses/create`

## Course update

PUT `https://skillup.global/api/v1/courses/{id}`


## Course deletion

DELETE `https://skillup.global/api/v1/courses/{id}`
