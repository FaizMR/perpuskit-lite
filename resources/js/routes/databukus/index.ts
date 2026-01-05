import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:21
 * @route '/databukus'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/databukus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:21
 * @route '/databukus'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:21
 * @route '/databukus'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:21
 * @route '/databukus'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:42
 * @route '/databukus/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/databukus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:42
 * @route '/databukus/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:42
 * @route '/databukus/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:42
 * @route '/databukus/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route '/databukus'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/databukus',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route '/databukus'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route '/databukus'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:74
 * @route '/databukus/{databuku}'
 */
export const show = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/databukus/{databuku}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:74
 * @route '/databukus/{databuku}'
 */
show.url = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { databuku: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { databuku: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    databuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        databuku: typeof args.databuku === 'object'
                ? args.databuku.id
                : args.databuku,
                }

    return show.definition.url
            .replace('{databuku}', parsedArgs.databuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:74
 * @route '/databukus/{databuku}'
 */
show.get = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:74
 * @route '/databukus/{databuku}'
 */
show.head = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:87
 * @route '/databukus/{databuku}/edit'
 */
export const edit = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/databukus/{databuku}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:87
 * @route '/databukus/{databuku}/edit'
 */
edit.url = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { databuku: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { databuku: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    databuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        databuku: typeof args.databuku === 'object'
                ? args.databuku.id
                : args.databuku,
                }

    return edit.definition.url
            .replace('{databuku}', parsedArgs.databuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:87
 * @route '/databukus/{databuku}/edit'
 */
edit.get = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:87
 * @route '/databukus/{databuku}/edit'
 */
edit.head = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:97
 * @route '/databukus/{databuku}'
 */
export const update = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/databukus/{databuku}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:97
 * @route '/databukus/{databuku}'
 */
update.url = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { databuku: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { databuku: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    databuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        databuku: typeof args.databuku === 'object'
                ? args.databuku.id
                : args.databuku,
                }

    return update.definition.url
            .replace('{databuku}', parsedArgs.databuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:97
 * @route '/databukus/{databuku}'
 */
update.put = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:97
 * @route '/databukus/{databuku}'
 */
update.patch = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:110
 * @route '/databukus/{databuku}'
 */
export const destroy = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/databukus/{databuku}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:110
 * @route '/databukus/{databuku}'
 */
destroy.url = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { databuku: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { databuku: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    databuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        databuku: typeof args.databuku === 'object'
                ? args.databuku.id
                : args.databuku,
                }

    return destroy.definition.url
            .replace('{databuku}', parsedArgs.databuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:110
 * @route '/databukus/{databuku}'
 */
destroy.delete = (args: { databuku: number | { id: number } } | [databuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const databukus = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default databukus