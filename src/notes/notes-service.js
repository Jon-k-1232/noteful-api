
const NotesService = {
    list(knex) {
        return knex('notes').select('*')
    },



    findById(knex, id){
        return knex('notes').where({id}).first('*')
    },



    insert(knex, note){
        return knex('notes')
            .insert(note)
            .returning('*')
            .then(row =>rows[0]);
    },



    delete(knex, id){
        return knex('notes').where({id}).delete();
    }

};

module.exports = NotesService;

