﻿CREATE TABLE [dbo].[Tips]
(
 [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
 [Path] VARCHAR(50) NOT NULL,
 [Name] VARCHAR(50) NOT NULL,
 [Description] VARCHAR(500),
 [Addition] VARCHAR(50)
)