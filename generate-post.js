const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const slugify = require('slugify')
const format = require('date-fns/format')
const fs = require('fs')

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('Gen Post', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  )
}

const askQuestions = () => {
  const questions = [
    {
      name: 'TITLE',
      type: 'input',
      message: 'What is the name of the post?',
    },
    {
      name: 'DESCRIPTION',
      type: 'input',
      message: 'Enter the description of the post',
    },
    {
      type: 'datetime',
      name: 'DATETIME',
      message: 'What is the post date?',
      initial: new Date(),
      format: ['d', '/', 'm', '/', 'yy', ' ', 'h', ':', 'MM', ' ', 'TT'],
    },
    {
      name: 'IMAGE',
      type: 'input',
      message: 'Enter the post image URL',
    },
    {
      type: 'list',
      name: 'DRAFT',
      message: 'Is this post a draft?',
      choices: ['Yes', 'No'],
      default: 1,
      filter: function(val) {
        return val === 'Yes' ? 'true' : 'false'
      },
    },
    {
      type: 'checkbox',
      message: 'Additional frontmatter fields',
      name: 'EXTRA_FIELDS',
      choices: [
        {
          name: 'aliasPath',
          checked: true,
        },
        'hideImage',
        'presentation',
        'imageHeight',
        'imageWidth',
        'imageMaxWidth',
        'imageSize',
        {
          name: 'imageCaption',
          checked: true,
        },
      ],
    },
  ]
  return inquirer.prompt(questions)
}

const success = message => {
  console.log(chalk.white.bgGreen.bold(message))
}

const run = async () => {
  // show script introduction
  init()

  // ask questions
  const answers = await askQuestions()
  const { TITLE, DESCRIPTION, DATETIME, IMAGE, DRAFT, EXTRA_FIELDS } = answers

  // create the file
  const slug = slugify(TITLE, { lower: true })
  const directory = `src/posts/${format(DATETIME, 'YYYY-MM-DD')}-${slug}`
  const filename = `src/posts/${format(
    DATETIME,
    'YYYY-MM-DD'
  )}-${slug}/index.md`
  const frontmatter = `---
title: "${TITLE}"
description: "${DESCRIPTION}"
image: ${IMAGE}
date: "${DATETIME.toISOString()}"
path: "/blog/${slug}"
draft: ${DRAFT}
${EXTRA_FIELDS.map(field => field + ':\n')}
---
`

  fs.mkdir(directory, err => {
    if (err) throw err
    success(`Done! Post directory created at ${directory}`)

    fs.writeFile(filename, frontmatter, error => {
      if (error) throw error
      success(`Done! Post created ${filename}`)
    })
  })
}

run()
