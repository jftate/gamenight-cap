using {
    Games        as g,
    PlayerRounds as pr,
    Players      as p,
    Rounds       as r,
    Tournaments  as t
} from '../db/gamenight-model';

service GamenightFree {
    entity Games as select from g;
    entity PlayerRounds as select from pr;
    entity Players as select from p;
    entity Rounds as select from r;
    entity Tournaments as select from t;

};