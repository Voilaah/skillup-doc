# Reviews

Reviews can be added for a Course or Instructor.

A Review needs at least a star rating (1-5 stars). It can have an
optional title and description.

Reviews can be disabled completely via October's backend settings.

## Review categories

You can create additional review categories like `Price`, `Design` or `Quality` and
assign them to specific course categories.

This allows a student to rate specific aspects of a course in more detail.

Review categories can be managed via the `Course Review Category` edit form.

## Settings

The following settings can be configured in the backend:

### Reviews enabled

This option removes the reviews form and list from the Product component if disabled.

### Moderate reviews

If this option is enabled, reviews need to be approved by the site admin manually.
Unapproved reviews are not visible on the website.

### Allow anonymous

By default, only logged in students can create reviews.

## Events

See [Events](/development/core/events#Review).

## Using in your plugin

Your model class will declare a `morphMany` relationships such as

```php
public $morphMany = [
        'reviews' => [Review::class, 'name' => 'reviewable'],
];
```

Then, your model class needs to useL

- the interface `implements \Voilaah\Reviews\Classes\Interface\ReviewableContract`
- the trait `use \Voilaah\Reviews\Classes\Traits\ReviewableTrait;`

Your class will then implement the two required methods `getReviewedType` and `getReviewedTitle`.

Example:

```php
/**
 * Return the type of reviewed model
 * /
public function getReviewedType(): string
{
    return 'Instructor';
}
/**
 * Return the name of the instructor
 * /
public function getReviewedTitle(): string
{
    return $this->name;
}
```
