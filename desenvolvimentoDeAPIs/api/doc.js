export const swaggerDocument = {
   "swagger": "2.0",
   "info": {
      "description": "My Bank API Description",
      "version": "1.0.0",
      "title": "My Bank API Description"
   },
   "host": "localhost:3000",
   "tags": [
      {
         "name": "account",
         "description": "Account Management"
      }
   ],
   "paths": {
      "/account": {
         "get": {
            "tags": [
               "account"
            ],
            "summary": "GET existing accounts",
            "description": "GET existing accounts description",
            "produces": [
               "application/json"
            ],
            "responses": {
               "200": {
                  "description": "sucessful operation",
                  "schema": {
                     "type": "array",
                     "items": {
                        "$ref": "#/definitions/Account"
                     }
                  }
               },
               "400": {
                  "description": "Error accourred"
               }
            }
         },
         "post": {
            "tags": [
               "account"
            ],
            "summary": "Create a new accounts",
            "description": "reate a new accounts with the received parameters",
            "consumes": [
               "application/json"
            ],
            "parameters": [
               {
                  "in": "body",
                  "name": "body",
                  "description": "Account object",
                  "required": true,
                  "schema": {
                     "$ref": "#/definitions/Account"
                  }
               }
            ],
            "responses": {
               "200": {
                  "description": "sucessful operation"
               },
               "400": {
                  "description": "Error accourred"
               }
            }
         }
      }
   },
   "definitions": {
      "Account": {
         "type": "object",
         "properties": {
            "name": {
               "type": "string",
               "example": "Luccas Adriano"
            },
            "balance": {
               "type": "integer",
               "example": 1550.5
            }
         }
      }
   }
}