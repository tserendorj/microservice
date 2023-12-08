const {CustomerRepository} = require('../database');
const {FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } = require('../utils')

const {APIError, BadRequestError} = require('../utils/app-errors')

class CustomerService {
    constructor() {
        this.repository = new CustomerRepository();
    }

    async SignIn(userInputs){
        const {email, password} = userInputs;
        try {
            const existingCustomer = await this.repository.FindCustomer({email});
        }
        catch (err){
            
        }
    }
}