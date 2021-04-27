import { withAuthenticator } from "@aws-amplify/ui-react"
import { useState } from "react"
import { API } from "aws-amplify"
import { v4 as uuid } from "uuid"
import { useRouter } from "next/router"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createCase } from '../graphql/mutations'

