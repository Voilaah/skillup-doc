<script setup>
import BadgeStd from '../../.vitepress/components/BadgeStd.vue'
import SpoilerStd from '../../.vitepress/components/SpoilerStd.vue'
</script>

# Course content
<BadgeStd label="Page is Work in Progress" color="danger" />

SkillUp can import a course content directly from your platform.

Only the course medias (such as images, videos, audios, files upload) won't be imported.

## SkillUp Course Content Structure

### Structure

A SkillUp course is comprised of many sections.

Each section is comprised of many lessons.

<!-- <SpoilerStd label="Details"> -->

<!-- <br /> -->

#### Section

A section has
- a title (*)
- a description (*)

A section is comprised of many lessons.


#### Lesson

A lesson has
- a title (*)
- a duration (*)
- files

A lesson is comprised of one and only one
- engagement
- or assignment
- or summary

An engagement can be:
- a rich text content
- a video
- an audio
- an embedded code



#### **Assignment**

A assignment is a quiz that comprises many questions.

A quiz can be **graded** or **not**.

**Question**

SkillUp handles different types of questions:
- open answer
- true / false
- multiple choices


<!-- </SpoilerStd> -->



**Complete Example**

For a course named "Basic Graphic Design with Canva"

- [**Course**] Basic Graphic Design with Canva
    - [**Section**] Foundations of Design
        - [**Lesson**] Foundations of Design Video
            - [**Engagement**] a video
        - [**Lesson**] Foundations of Design Quiz
            - [**Assignment**] a ungraded quiz
                - [*OpenAnswer*]: Write a summary of your understanding of the video
                - [*MultipleChoice*]: What is the main function of negative space in design?
                    - [*Choices*]
                        - A) To add more elements to a composition
                        - B) To provide structure and breathing room for content
                        - C) To make the design more complex
                    - [*Answer*]
                        - 2
        - [**Lesson**] Lesson summary
            - [**Engagement**] a summary
        - [**Lesson**] Additional Resources
            - [**Engagement**] a rich text content
            - [*Files*]
                - File 1 url
                - File 2 url
    - [**Section**] Advanced Design Principles
        - [**Lesson**] Advanced Design Principles Video
            - [**Engagement**] an embedded code
        - [**Lesson**] Advanced Design Principles Quiz (graded)
            - [**Assignment**] a graded quiz
                - [*OpenAnswer*]: Write a summary of your understanding of the video
                - [*TrueFalse*]: The function of negative space in design is to make design more complex ?
                    - [*Answer*] true
        - [**Lesson**] Lesson summary
            - [**Engagement**] a summary
        - [**Lesson**] Additional Resources
            - [**Engagement**] a rich text content
            - [*Files*]
                - File 1 url
                - File 2 url


## API requirements

Your platform needs to provide the following API to retrieve your course content.
