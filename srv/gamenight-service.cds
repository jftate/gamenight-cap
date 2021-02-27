using {
    Games        as g,
    PlayerRounds as pr,
    Players      as p,
    Rounds       as r,
    Tournaments  as t
} from '../db/gamenight-model';

service GamenightService @(requires : 'authenticated-user') {

    entity Games @(restrict : [{
        grant : [
            'READ'
        ],
        to    : 'Gamenight'
    },{
        grant : [
            '*'
        ],
        to    : 'Admin'
    }]) as select from g;

    entity PlayerRounds @(restrict : [{
        grant : [
            '*'
        ],
        to    : 'Gamenight'
    }]) as select from pr;

    entity Players @(restrict : [{
        grant : [
            'READ'
        ],
        to    : 'Gamenight'
    },{
        grant : [
            '*'
        ],
        to    : 'Admin'
    }]) as select from p;

    entity Rounds @(restrict : [{
        grant : [
            '*'
        ],
        to    : 'Gamenight'
    }]) as select from r;

    entity Tournaments @(restrict : [{
        grant : [
            '*'
        ],
        to    : 'Gamenight'
    }]) as select from t;

}
