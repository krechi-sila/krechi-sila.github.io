# notable-people Specification

## Purpose

Раздел «Известные люди» публикует биографии и краткие справки о людях, связанных с Кречевицами, в виде списка и отдельных страниц.

## Requirements

### Requirement: Navigation entry for notable people
The site SHALL expose a main navigation item labeled «Известные люди» that leads to the notable people section.

#### Scenario: Visitor opens the section from the menu
- **WHEN** a visitor clicks «Известные люди» in the main menu
- **THEN** the site navigates to `/people`
- **AND** the page title indicates the notable people section

### Requirement: Notable people list page
The system SHALL provide a list page at `/people` that shows every published notable person with a link to their detail page.

#### Scenario: Visitor views the list
- **WHEN** a visitor opens `/people`
- **THEN** the page displays the heading «Известные люди»
- **AND** each published person appears with at least their display name
- **AND** each entry links to `/people/<slug>`

#### Scenario: Empty catalog is handled
- **WHEN** there are no published people
- **THEN** the list page still loads successfully
- **AND** shows that the catalog is empty (or has no entries)

### Requirement: Notable person detail page
The system SHALL provide a detail page at `/people/<slug>` with the person's name and biography content.

#### Scenario: Visitor opens a known person
- **WHEN** a visitor opens `/people/<slug>` for an existing published person
- **THEN** the page shows the person's display name as the primary heading
- **AND** shows the rendered biography content from that person's source file
- **AND** the document title includes the person's name

#### Scenario: Unknown slug is not a valid static page
- **WHEN** a visitor requests `/people/<slug>` for a slug that is not published
- **THEN** the static site does not serve a person page for that slug (404 / missing page as with other static sections)

### Requirement: Person content model
Each published person MUST be defined by a markdown source file with front matter that includes at least a display name (`title`) and a unique slug derived from the filename.

#### Scenario: Required metadata is present
- **WHEN** a person markdown file is published
- **THEN** it includes front matter with `title` (display name)
- **AND** the filename (without extension) is used as the URL slug

#### Scenario: Optional metadata
- **WHEN** a person file includes optional fields such as `years`, `role`, or `image`
- **THEN** the list and/or detail page MAY show those fields when present
- **AND** omission of optional fields MUST NOT break list or detail rendering
