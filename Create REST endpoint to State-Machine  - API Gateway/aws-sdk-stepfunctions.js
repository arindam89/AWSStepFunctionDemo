var AWS = require("aws-sdk");
AWS.apiLoader.services["stepfunctions"] = {};
AWS.StepFunctions = AWS.Service.defineService("stepfunctions", [ "2016-11-23" ]);AWS.apiLoader.services["stepfunctions"]["2016-11-23"] = {
    version: "2.0",
    metadata: {
        apiVersion: "2016-11-23",
        endpointPrefix: "states",
        jsonVersion: "1.0",
        protocol: "json",
        serviceAbbreviation: "AWS SFN",
        serviceFullName: "AWS Step Functions",
        signatureVersion: "v4",
        targetPrefix: "AWSStepFunctions",
        uid: "states-2016-11-23"
    },
    operations: {
        CreateActivity: {
            input: {
                type: "structure",
                required: [ "name" ],
                members: {
                    name: {}
                }
            },
            output: {
                type: "structure",
                required: [ "activityArn", "creationDate" ],
                members: {
                    activityArn: {},
                    creationDate: {
                        type: "timestamp"
                    }
                }
            },
            idempotent: true
        },
        CreateStateMachine: {
            input: {
                type: "structure",
                required: [ "name", "definition", "roleArn" ],
                members: {
                    name: {},
                    definition: {},
                    roleArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "stateMachineArn", "creationDate" ],
                members: {
                    stateMachineArn: {},
                    creationDate: {
                        type: "timestamp"
                    }
                }
            },
            idempotent: true
        },
        DeleteActivity: {
            input: {
                type: "structure",
                required: [ "activityArn" ],
                members: {
                    activityArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DeleteStateMachine: {
            input: {
                type: "structure",
                required: [ "stateMachineArn" ],
                members: {
                    stateMachineArn: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        DescribeActivity: {
            input: {
                type: "structure",
                required: [ "activityArn" ],
                members: {
                    activityArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "activityArn", "name", "creationDate" ],
                members: {
                    activityArn: {},
                    name: {},
                    creationDate: {
                        type: "timestamp"
                    }
                }
            }
        },
        DescribeExecution: {
            input: {
                type: "structure",
                required: [ "executionArn" ],
                members: {
                    executionArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "executionArn", "stateMachineArn", "status", "startDate", "input" ],
                members: {
                    executionArn: {},
                    stateMachineArn: {},
                    name: {},
                    status: {},
                    startDate: {
                        type: "timestamp"
                    },
                    stopDate: {
                        type: "timestamp"
                    },
                    input: {},
                    output: {}
                }
            }
        },
        DescribeStateMachine: {
            input: {
                type: "structure",
                required: [ "stateMachineArn" ],
                members: {
                    stateMachineArn: {}
                }
            },
            output: {
                type: "structure",
                required: [ "stateMachineArn", "name", "definition", "roleArn", "creationDate" ],
                members: {
                    stateMachineArn: {},
                    name: {},
                    status: {},
                    definition: {},
                    roleArn: {},
                    creationDate: {
                        type: "timestamp"
                    }
                }
            }
        },
        GetActivityTask: {
            input: {
                type: "structure",
                required: [ "activityArn" ],
                members: {
                    activityArn: {},
                    workerName: {}
                }
            },
            output: {
                type: "structure",
                members: {
                    taskToken: {},
                    input: {}
                }
            }
        },
        GetExecutionHistory: {
            input: {
                type: "structure",
                required: [ "executionArn" ],
                members: {
                    executionArn: {},
                    maxResults: {
                        type: "integer"
                    },
                    reverseOrder: {
                        type: "boolean"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "events" ],
                members: {
                    events: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "timestamp", "type", "id" ],
                            members: {
                                timestamp: {
                                    type: "timestamp"
                                },
                                type: {},
                                id: {
                                    type: "long"
                                },
                                previousEventId: {
                                    type: "long"
                                },
                                activityFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                activityScheduleFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                activityScheduledEventDetails: {
                                    type: "structure",
                                    required: [ "resource" ],
                                    members: {
                                        resource: {},
                                        input: {},
                                        timeoutInSeconds: {
                                            type: "long"
                                        },
                                        heartbeatInSeconds: {
                                            type: "long"
                                        }
                                    }
                                },
                                activityStartedEventDetails: {
                                    type: "structure",
                                    members: {
                                        workerName: {}
                                    }
                                },
                                activitySucceededEventDetails: {
                                    type: "structure",
                                    members: {
                                        output: {}
                                    }
                                },
                                activityTimedOutEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                executionFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                executionStartedEventDetails: {
                                    type: "structure",
                                    members: {
                                        input: {},
                                        roleArn: {}
                                    }
                                },
                                executionSucceededEventDetails: {
                                    type: "structure",
                                    members: {
                                        output: {}
                                    }
                                },
                                executionAbortedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                executionTimedOutEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                lambdaFunctionFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                lambdaFunctionScheduleFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                lambdaFunctionScheduledEventDetails: {
                                    type: "structure",
                                    required: [ "resource" ],
                                    members: {
                                        resource: {},
                                        input: {},
                                        timeoutInSeconds: {
                                            type: "long"
                                        }
                                    }
                                },
                                lambdaFunctionStartFailedEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                lambdaFunctionSucceededEventDetails: {
                                    type: "structure",
                                    members: {
                                        output: {}
                                    }
                                },
                                lambdaFunctionTimedOutEventDetails: {
                                    type: "structure",
                                    members: {
                                        error: {},
                                        cause: {}
                                    }
                                },
                                stateEnteredEventDetails: {
                                    type: "structure",
                                    required: [ "name" ],
                                    members: {
                                        name: {},
                                        input: {}
                                    }
                                },
                                stateExitedEventDetails: {
                                    type: "structure",
                                    required: [ "name" ],
                                    members: {
                                        name: {},
                                        output: {}
                                    }
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListActivities: {
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "activities" ],
                members: {
                    activities: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "activityArn", "name", "creationDate" ],
                            members: {
                                activityArn: {},
                                name: {},
                                creationDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListExecutions: {
            input: {
                type: "structure",
                required: [ "stateMachineArn" ],
                members: {
                    stateMachineArn: {},
                    statusFilter: {},
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "executions" ],
                members: {
                    executions: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "executionArn", "stateMachineArn", "name", "status", "startDate" ],
                            members: {
                                executionArn: {},
                                stateMachineArn: {},
                                name: {},
                                status: {},
                                startDate: {
                                    type: "timestamp"
                                },
                                stopDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        ListStateMachines: {
            input: {
                type: "structure",
                members: {
                    maxResults: {
                        type: "integer"
                    },
                    nextToken: {}
                }
            },
            output: {
                type: "structure",
                required: [ "stateMachines" ],
                members: {
                    stateMachines: {
                        type: "list",
                        member: {
                            type: "structure",
                            required: [ "stateMachineArn", "name", "creationDate" ],
                            members: {
                                stateMachineArn: {},
                                name: {},
                                creationDate: {
                                    type: "timestamp"
                                }
                            }
                        }
                    },
                    nextToken: {}
                }
            }
        },
        SendTaskFailure: {
            input: {
                type: "structure",
                required: [ "taskToken" ],
                members: {
                    taskToken: {},
                    error: {},
                    cause: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        SendTaskHeartbeat: {
            input: {
                type: "structure",
                required: [ "taskToken" ],
                members: {
                    taskToken: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        SendTaskSuccess: {
            input: {
                type: "structure",
                required: [ "taskToken", "output" ],
                members: {
                    taskToken: {},
                    output: {}
                }
            },
            output: {
                type: "structure",
                members: {}
            }
        },
        StartExecution: {
            input: {
                type: "structure",
                required: [ "stateMachineArn" ],
                members: {
                    stateMachineArn: {},
                    name: {},
                    input: {}
                }
            },
            output: {
                type: "structure",
                required: [ "executionArn", "startDate" ],
                members: {
                    executionArn: {},
                    startDate: {
                        type: "timestamp"
                    }
                }
            },
            idempotent: true
        },
        StopExecution: {
            input: {
                type: "structure",
                required: [ "executionArn" ],
                members: {
                    executionArn: {},
                    error: {},
                    cause: {}
                }
            },
            output: {
                type: "structure",
                required: [ "stopDate" ],
                members: {
                    stopDate: {
                        type: "timestamp"
                    }
                }
            }
        }
    },
    shapes: {},
    paginators: {
        GetExecutionHistory: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "events"
        },
        ListActivities: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "activities"
        },
        ListExecutions: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "executions"
        },
        ListStateMachines: {
            input_token: "nextToken",
            output_token: "nextToken",
            limit_key: "maxResults",
            result_key: "stateMachines"
        }
    }
}
