import { RegisterOptions } from "react-hook-form";

const MailValidator: RegisterOptions = {
    required: "É necessário colocar um email",
    minLength:{
        message: "O Email prescisa ter mais de 4 caracteres",
        value: 4,
    },
    maxLength:{
        message: "O Email não pode ter mais de 64 caracteres",
        value: 64
    },
    pattern:{
        message: "insira um email valido. Exemplo: name@gmail.com",
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    }
}

const NameValidator: RegisterOptions = {
    required: "É necessário colocar um nome",
    minLength:{
        message: "O Nome precisa de pelo menos 4 caracteres",
        value: 4
    },
    maxLength:{
        message: "O Nome não pode ter mais de 64 caracteres",
        value: 64
    },
}

const MessageValidator: RegisterOptions = {
    required: "É necessário colocar uma mensagem",
    minLength:{
        message: "A Mensagem prescisa de pelo menos 10 caracteres",
        value: 10,
    },
    maxLength:{
        message: "A Mensagem não pode ter mais de 500 caracteres",
        value: 500
    }
}


export{
    MailValidator,
    NameValidator,
    MessageValidator
}