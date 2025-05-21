<script setup>
import BadgeStd from '../../.vitepress/components/BadgeStd.vue'
</script>

# Getting Started

<BadgeStd label="Page is Work in Progress" color="danger" />

## Integration Strategy

### Scheduled

In case you are updating your courses after being integrated inside SkillUp, a scheduled worker will scan at a predefined frequence your courses list API to detect if:

- there are new courses (based on the existence of `id`)
- existing courses have been updated (based on the value of `last_updated_at`)

### Manual

Also, a SkillUp admin has the possibility to run a course update manually from SkillUp backend performing a call to the [Course Content](/integration/courses/content) API.
