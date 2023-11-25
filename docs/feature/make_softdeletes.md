# SOFT DELETES

## 1. Specify the model with softDeletes
- Syntax:
```bash
super({
  table: 'tableName',
  softDeletes: true
  fillable: [],
});
```

- Example:
```bash
import BaseModel from './base.model';

class LineupModel extends BaseModel {
  constructor() {
    super({
      table: 'lineups',
      softDeletes: true,
      fillable: [
        'id',
        'team_id',
        'title',
        'created_by',
        'starting',
        'substitute',
        'not_member',
        'created_at',
        'updated_at',
        'deleted_at',
      ],
    });
  }
}

export default LineupModel;
```

## 2. Methods support
| Methods       | Description
|:--------------|----------------------------------------------------------------------
| deleteBy()    | Soft delete specified record.
| massDelete()  | Soft delete specified records.
| deleteAll()   | Soft delete all record.
| list()        | Returns records but does not include deleted records.
| withTrashed() | Returns records including deleted records.
| onlyTrashed() | Returns only deleted records.
| forceDelete() | Permanently delete records that have been softDelete.
| restore()     | Recover soft deleted recordings.