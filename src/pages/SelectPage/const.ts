const defaultOption  = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
]

const defaultCategory  = [
    {
        value: 'Category1',
        label: 'category1',
        options: [
            {value: 'options1', label: 'label1'},
            {value: 'options2', label: 'label2'},
            {value: 'options3', label: 'label3'},
        ],
    },
    {
        value: 'Category2',
        label: 'category2',
        options: [
            {value: 'options4', label: 'label4'},
            {value: 'options5', label: 'label5'},
            {value: 'options6', label: 'label6'}
        ]
    }
]

export {defaultCategory, defaultOption}