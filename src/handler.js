const { nanoid } = require("nanoid");
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    
    const {title, tags, body} = request.payload;

    const id = nanoid(16);
    const createAt = new Date().toISOString();
    const updateAt = createAt;

    const newNote = {
        title, tags, body, id, createAt, updateAt,
    };
    
    notes.push(newNote);
    const isSuccess = notes.filter((note) => note.id === id).length > 0; 

    if (isSuccess){
        const response = h.response({
            status:'success',
            message: 'catatan berhasil ditambahkan',
            data:{
                noteId: id,
            }
        });
        response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
        response.code(201);
        return response;
    }
       else{ const response = h.response({
            status: 'fail',
            message: 'catatan gagal ditambahkan',

        });
    response.code(500);
    return response;
    };
   // 
   
}
const getAllNotesHandler = (request,_h) => ({
    status:'success',
    data:{
        notes,
    },
    }),

 const getNoteByIdHandler = (request, h) => {
 
    };

module.exports = {addNoteHandler, getAllNotesHandler};