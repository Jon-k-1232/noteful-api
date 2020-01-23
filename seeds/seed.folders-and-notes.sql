INSERT INTO folders ("name")
VALUES
('Projects Folder'),
('Notes Folder'),
('Other Notes Folder');



INSERT INTO notes ("name", content, folder_id)
VALUES
('Note One', 'this is note one', 1),
('Note Two', 'this is note two', 2),
('NOTE Three', 'this is note three', 3);

