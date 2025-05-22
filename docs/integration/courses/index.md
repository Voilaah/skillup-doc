# Getting Started

<Badge type="warning">Page is Work in Progress</Badge>

Once setup in our SkillUp backend, the platform will be able to fetch your courses list and courses details.

First, have a read through the [SkillUp Course Data Structure](/integration/courses/models/) to better understand our platform.

Then to be able to integrate your courses, SkillUp requires only two APIs from your platform:
* [one to fetch your courses list](/integration/courses/list)
* [one to fetch a course detail](/integration/courses/item)

## Integration Strategy

### Scheduled

In case you are updating your courses after being integrated inside SkillUp, a scheduled worker will scan at a predefined frequence your courses list API to detect if:

- there are new courses (based on the existence of `id`)
- existing courses have been updated (based on the value of `last_updated_at`)

### On-Demand

Also, a SkillUp admin has the possibility to perform a course update on-demand from the SkillUp backend performing a call to your API to [fetch](/integration/courses/item) the course updated informations.
