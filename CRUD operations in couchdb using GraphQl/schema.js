const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// const empcollection = require('./service')
const operation = require('./service');

const CustomerType = new GraphQLObjectType({
    name: 'customer',
    fields: () => ({
        empid: { type: GraphQLString },
        empname: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

//root query
const RootQuery = new GraphQLObjectType({
    name: 'rootquerytype',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                empid: { type: GraphQLString }
            },
            resolve(parentvalue, args) {
                return operation.getallcustomers().then(customers => {
                    for (let i = 0; i < customers.length; i++) {
                        if (customers[i].empid == args.empid) {
                            return customers[i]
                        }
                    }
                })

            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentvalue, args) {
                return operation.getallcustomers().then(customers => {
                    return customers
                })
            }
        }
    }

})

//mutations
const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addcustomer: {
            type: CustomerType,
            args: {
                empid: { type: GraphQLString },
                empname: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parentvalue, args) {
                operation.addcustomer({ empid: args.empid, empname: args.empname, email: args.email })
            }
        },
        deletecustomer: {
            type: CustomerType,
            args: {
                empid: { type: GraphQLString }
            },
            resolve(parentvalue, args) {
                operation.deletecustomer(args.empid)
            }
        },
        updatecustomer: {
            type: CustomerType,
            args: {
                empid: { type: GraphQLString },
                empname: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parentvalue, args) {
                operation.updatecustomer({ empid: args.empid, empname: args.empname, email: args.email })
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})