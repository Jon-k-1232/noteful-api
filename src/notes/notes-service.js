
const NotesService = {
    list(knex) {
        return knex('note').select('*')
    },



    findById(knex, id){
        return knex('note').where({id}).first('*')
    },



    insert(knex, note){
        return knex('note')
            .insert(note)
            .returning('*')
            .then(rows =>rows[0]);
    },



    delete(knex, id){
        return knex('note').where({id}).delete();
    }

};

module.exports = NotesService;

