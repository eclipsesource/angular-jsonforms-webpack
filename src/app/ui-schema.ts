export const UI_SCHEMA = 
{
    'type': 'VerticalLayout',
    'elements': [
      {
        'type': 'HorizontalLayout',
        'elements': [
          {
            'type': 'Control',
            'label': {
              'text': 'Name',
              'show': true
            },
            'scope': {
              '$ref': '#/properties/name'
            }
          },
          {
            'type': 'Control',
            'label': {
              'text': 'Age'
            },
            'scope': {
              '$ref': '#/properties/personalData/properties/age'
            }
          },
          {
            'type': 'Control',
            'label': 'Height',
            'scope': {
              '$ref': '#/properties/personalData/properties/height'
            }
          }
        ]
      },
      {
        'type': 'HorizontalLayout',
        'elements': [
          {
            'type': 'Control',
            'label': 'Nationality',
            'scope': {
              '$ref': '#/properties/nationality'
            }
          },
          {
            'type': 'Control',
            'label': 'Occupation',
            'scope': {
              '$ref': '#/properties/occupation'
            },
            'suggestion': ['Accountant', 'Engineer', 'Freelancer',
              'Journalism', 'Physician', 'Student', 'Teacher', 'Other']
          },
          {
            'type': 'Control',
            'label': 'Birthday',
            'scope': {
              '$ref': '#/properties/birthDate'
            }
          }
        ]
      }
    ]
  };