export const exampleJSON = {
  "name": "Customer Satisfaction Survey",
  "startScreens": [
    {
      "header": "Help Us Serve You Better",
      "description": "We value your opinion! This brief survey will help us improve our services. Thank you!",
      "okButtonLabel": "Start Survey"
    }
  ],
  "pages": [
    {
      "blocks": [
        {
          "title": "Overall, how would you rate your experience with SurveyCompo?",
          "inputs": [
            {
              "type": "NUMBER_SCALE",
              "numberScaleInputLabels": ["Dissatisfied", "Satisfied"]
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "title": "How would you rate the following features?",
          "inputs": [
            {
              "type": "STAR_SCALE",
              "label": "UI Style",
              "labelPosition": "LEFT",
              "labelWidth": "30%"
            },
            {
              "type": "STAR_SCALE",
              "label": "Flexibility",
              "labelPosition": "LEFT",
              "labelWidth": "30%"
            },
            {
              "type": "STAR_SCALE",
              "label": "Survey Logic",
              "labelPosition": "LEFT",
              "labelWidth": "30%"
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "title": "Did SurveyCompo solve your problem?",
          "inputs": [
            {
              "type": "RADIO",
              "label": "Yes"
            },
            {
              "type": "RADIO",
              "label": "No"
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "title": " Please let us know how your experience has been by answering the following questions?",
          "inputs": [
            {
              "type": "LIKERT_SCALE",
              "likertInputPreset": "AGREEMENT",
              "label": "SurveyCompo is easy to use"
            },
            {
              "type": "LIKERT_SCALE",
              "likertInputPreset": "AGREEMENT",
              "label": "SurveyCompo is flexible"
            },
            {
              "type": "LIKERT_SCALE",
              "likertInputPreset": "AGREEMENT",
              "label": "SurveyCompo is affordable"
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "title": "How likely are you to use SurveyCompo again?",
          "inputs": [
            {
              "type": "NUMBER_SCALE",
              "id": "use-again",
              "numberScaleInputLabelPosition": "TOP",
              "numberScaleInputLabels": ["Very Likely", "Very Unlikely"]
            }
          ]
        }
      ]
    },
    {
      "blocks": [
        {
          "title": "How likely are you to refer a friend, family member, or colleague?",
          "inputs": [
            {
              "type": "NUMBER_SCALE",
              "id": "refer",
              "numberScaleInputLabelPosition": "TOP",
              "numberScaleInputLabels": ["Very Likely", "Very Unlikely"]
            }
          ]
        }
      ]
    }
  ],
  "completeScreens": [
    {
      "header": "Thank You for Your Feedback!",
      "description": "We appreciate your time and feedback. Your input will help us improve our services.",
      "okButtonLabel": "Close"
    }
  ]
}
