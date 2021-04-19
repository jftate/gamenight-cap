using { Users as usr,
    Roles as rol,
    Apps  as app } from '../db/user-model';

service UserRegistration {

    entity Users @(restrict : [{
        grant : ['*'],
        to    : 'UserAdmin'
    },{
        grant : ['READ', 'WRITE'],
        to    : 'UserConsumer'
    }]) as select from usr;

    entity Roles @(restrict : [{
        grant : ['*'],
        to    : 'UserAdmin'
    }]) as select from rol;

    entity Apps @(restrict : [{
        grant : ['*'],
        to    : 'UserAdmin'
    }]) as select from app;

}
