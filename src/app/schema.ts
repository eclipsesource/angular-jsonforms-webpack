export const SCHEMA =
{
    'type': 'object',
    'properties': {
      'name': {
        'type': 'string',
        'minLength': 3
      },
      'personalData': {
        'type': 'object',
        'properties': {
          'age': {
            'type': 'integer'
          },
          'height': {
            'type': 'number'
          }
        },
        'required': ['age', 'height']
      },
      'vegetarian': {
        'type': 'boolean'
      },
      'birthDate': {
        'type': 'string',
        'format': 'date'
      },
      'nationality': {
        'type': 'string',
        'enum': ['DE', 'IT', 'JP', 'US', 'RU', 'Other']
      },
      'occupation': {
        'type': 'string'
      }
    },
    'required': ['occupation', 'nationality']
  };