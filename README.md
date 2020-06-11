# kintone-process-management

## Project structure
├── build                   # build plugin
├── src                     # source files 
    ├── configBuild         # source build plugin
    ├── plugin              # source main run project
        ├── components      # to store component can use any where
        ├── context         # to create context object
        ├── feature         # to store proceed feature for views
        ├── hook            # to store custome hook using save data
        ├── types           # to store types defined for typescript
        ├── utils           # to store feature util
        ├── views           # to store layout display on screen desktop
        ├── app.tsx         # to store wrapped for view
        ├── index.tsx       # to store main run
        ├── index.css       # to store css global
└── README.md 

### How to run dev
- npm install
- npm run dev
- npm run build:dev

When complete 3 step above, plugin.zip will be genereted on build folder.
Attach plugin.zip on domain site


