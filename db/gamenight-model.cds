entity Players {
    key ID: UUID;
    Name: String(40) not null;
    Age: Integer;
    isActiv: Boolean default true;
    PlayerRounds: Association to many PlayerRounds on PlayerRounds.Player = $self;    
};

entity Games {
    key ID: UUID;
    Name: String(60) not null;
    Regel: String(1024);
    MaxPlayer: Integer;  
    //toPlayers: Association to Players;  
};

entity Rounds {
    key ID: UUID;
    Tournament: Association to one Tournaments not null; 
    Game: Association to one Games not null;
    PlayerRounds: Association to many PlayerRounds on PlayerRounds.Round = $self; 
    Status: String enum { started; rejected; closed; }
};

entity PlayerRounds {
    key ID: UUID;
    Round: Association to one Rounds not null;
    Player: Association to one Players not null;
    Rank: Integer;
    Points: Integer;
};

entity Tournaments {
    key ID: UUID;
    Rounds: Association to many Rounds on Rounds.Tournament = $self;
    Winner: String(40);
};

