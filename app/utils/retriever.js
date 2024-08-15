import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase'
import { OpenAIEmbeddings } from '@langchain/openai'
import { createClient } from '@supabase/supabase-js'

const openAIApiKey = process.env.OPENAI_API_KEY;
if(!openAIApiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}
const supabaseUrl = process.env.SUPABASE_URL;
if(!supabaseUrl) {
    throw new Error('SUPABASE_URL environment variable is not set');
}
const supabaseKey = process.env.SUPABASE_KEY;
if(!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is not set');
}

const client = createClient(supabaseUrl, supabaseKey);
const embedding = new OpenAIEmbeddings({openAIApiKey });

const vectorstores = new SupabaseVectorStore(embedding, {
    client,
    tableName: 'documents',
    queryName: 'match_documents',

})
const retriever = vectorstores.asRetriever();
export {retriever};
