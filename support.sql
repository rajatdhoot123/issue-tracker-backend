CREATE TABLE support (
    id                  INT(11)      NOT NULL AUTO_INCREMENT,
    created_at          TIMESTAMP NULL,
    updated_at          TIMESTAMP NULL,
    issue_by            VARCHAR(255)     null,
    issue               VARCHAR(255)     null,
    status              VARCHAR(255)     null,
    category            VARCHAR(255)     null,
    primary key(id)
);
