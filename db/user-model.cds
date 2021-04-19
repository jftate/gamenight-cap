entity Users {
    key ID: UUID;
    Username: String(40) not null;
    Lastname: String(60);
    Firstname: String(60);
    Email: String(120);
    isActiv: Boolean default true;    
};

entity Roles {
    key ID: UUID;
    key UserId: Association to one Users not null;
    App: Association to one Apps;
    Name: String(60) not null;
    Description: String(255);
    isActiv: Boolean default true;    
};

entity Apps {
    key ID: UUID;
    Name: String(120) not null;
    Description: String(255);
    Roles: Association to many Roles on Roles.App = $self;
    isActiv: Boolean default true;    
};